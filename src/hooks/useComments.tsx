import { IComment, getComments } from '@/service/post';
import React, { useEffect, useState } from 'react';

type Props = {};

export default function useComments(postId: string) {
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const res = await getComments(postId);
        setComments(res);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  return { comments, isLoading };
}
