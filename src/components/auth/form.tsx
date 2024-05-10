import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AuthForm() {
  return (
    <Tabs defaultValue='login' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='login'>Login</TabsTrigger>
        <TabsTrigger value='register'>Register</TabsTrigger>
      </TabsList>
      <TabsContent value='login'>
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              {`Make changes to your account here. Click save when you're done.`}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value='register'>
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              {`Change your password here. After saving, you'll be logged out.`}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='password' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='password'>New password</Label>
              <Input id='password' type='password' />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
