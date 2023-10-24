import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Tavell Lawrence</p>
          <p className="text-sm text-muted-foreground">
            tavell.lawrence@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$199.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Yorell Wade</p>
          <p className="text-sm text-muted-foreground">yorell.wade@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$359.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jaboris Mccall</p>
          <p className="text-sm text-muted-foreground">
            jaboris.mccall@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Shantana Black</p>
          <p className="text-sm text-muted-foreground">shantana@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$199.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Chineka Anthony</p>
          <p className="text-sm text-muted-foreground">
            chineka.anthony@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$139.00</div>
      </div>
    </div>
  );
}
