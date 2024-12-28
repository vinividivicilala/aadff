"use server";

import { auth } from "@/auth";
import { z } from "zod";
import type { Post } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/db";
import paths from "@/path";
import { revalidatePath } from "next/cache";

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}
export async function createPost(
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (result.error) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed to do this."],
      },
    };
  }

  const topic = await db.topic.findFirst({
    where: {
      slug,
    },
  });

  if (!topic) {
    return {
      errors: {
        _form: ["Cannot find the topic"],
      },
    };
  }

  // return {
  //   errors: {},
  // };

  let post: Post;

  try {
    // throw new Error("Failed to create topic.");

    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id as string,
        topicId: topic.id,
      },
    });
    // topic = await db.topic.create({
    //   data: {
    //     slug: result.data.title,
    //     content: result.data.content,
    //   },
    // });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong!"],
        },
      };
    }
  }

  // TODO revalidate the topic show page
  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(topic.slug, post.id));

  //   return {
  //     errors: {},
  //   };
}
