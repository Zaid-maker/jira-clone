

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome Back 👋</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="email"
            value={""}
            onChange={() => {}}
            placeholder="Enter Email Address"
            disabled={false}
          />
          <Input
            required
            type="password"
            value={""}
            onChange={() => {}}
            placeholder="Enter Password"
            disabled={false}
            min={8}
            max={256}
          />
          <Button
            className="w-full"
            disabled={false}
            size='lg'
          >
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
