/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KfWuxb8sQsc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import '../globals.css'


export default function Component() {


  
  return (
    <div>
      <section className="w-full pt-12 md:pt-24 lg:pt-32 centrar sectionmargeninferior">
        <div className="container space-y-8 px-4 md:px-6 lg:space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mis Publicaciones</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mira mis últimas publicaciones
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
              <CardContent className="p-4">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Publication"
                  className="aspect-video w-full rounded-md object-cover"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold">Trabajo 1</h3>
                  <p className="text-muted-foreground line-clamp-2">Cliente: John Doe</p>
                  <p className="text-muted-foreground line-clamp-2">Monto: $500</p>
                  <p className="text-muted-foreground line-clamp-2">Fecha: 2 días atrás</p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8 rounded-full">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">John Doe</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
              <CardContent className="p-4">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Publication"
                  className="aspect-video w-full rounded-md object-cover"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold">Trabajo 2</h3>
                  <p className="text-muted-foreground line-clamp-2">Cliente: Jane Smith</p>
                  <p className="text-muted-foreground line-clamp-2">Monto: $750</p>
                  <p className="text-muted-foreground line-clamp-2">Fecha: 3 días atrás</p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8 rounded-full">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Jane Smith</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
              <CardContent className="p-4">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Publication"
                  className="aspect-video w-full rounded-md object-cover"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold">Trabajo 3</h3>
                  <p className="text-muted-foreground line-clamp-2">Cliente: Bob Johnson</p>
                  <p className="text-muted-foreground line-clamp-2">Monto: $300</p>
                  <p className="text-muted-foreground line-clamp-2">Fecha: 4 días atrás</p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8 rounded-full">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>BJ</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Bob Johnson</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
              <CardContent className="p-4">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Publication"
                  className="aspect-video w-full rounded-md object-cover"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold">Trabajo 4</h3>
                  <p className="text-muted-foreground line-clamp-2">Cliente: Sarah Lee</p>
                  <p className="text-muted-foreground line-clamp-2">Monto: $450</p>
                  <p className="text-muted-foreground line-clamp-2">Fecha: 5 días atrás</p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8 rounded-full">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Sarah Lee</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}