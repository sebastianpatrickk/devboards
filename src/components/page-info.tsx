import { Separator } from "./ui/separator";

type PageInfoProps = {
  title: string;
  description: string;
};

export const PageInfo = ({ title, description }: PageInfoProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start gap-2">
        <h1 className=" text-2xl font-bold tracking-tighter md:text-3xl lg:leading-[1.1]">
          {title}
        </h1>
        <p className="max-w-[750px] text-balance text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
      <Separator />
    </div>
  );
};
