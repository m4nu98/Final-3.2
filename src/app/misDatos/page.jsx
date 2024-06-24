import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card2"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import "@/app/globals.css"

export default function Component() {
  return (
    <div className=" flex centrar flex-col min-h-[100dvh]">
        <section className="  centrar  py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Update Your Profile</h2>
              <p className="text-gray-500 md:text-xl">Manage your personal information and settings.</p>
            </div>


            <div className="  flex justify-center">
              <Card className="w-full max-w-7xl">
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                  <CardDescription>Update your profile information.</CardDescription>
                </CardHeader>
                <CardContent className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="surname">Surname</Label>
                    <Input id="surname" placeholder="Enter your surname" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="Enter your password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Enter your address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Enter your country" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="Enter your state" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Enter your city" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">Zip Code</Label>
                    <Input id="zip" placeholder="Enter your zip code" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" placeholder="Enter your age" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Enter your bio" className="min-h-[100px]" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">Save</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      
    </div>
  )
}
