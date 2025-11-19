// src/utils/handleAsync.ts
// lightweight wrapper (optional) - not used extensively above but provided
export const handleAsync = (fn: Function) => {
    return (req: any, res: any, next: any) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  };
  