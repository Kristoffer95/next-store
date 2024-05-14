import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AuthRegister from './register';
import AuthLogin from './login';

export default function AuthForm() {
  return (
    <Tabs defaultValue='login' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='login'>Login</TabsTrigger>
        <TabsTrigger value='register'>Register</TabsTrigger>
      </TabsList>
      <TabsContent value='login'>
        <AuthLogin />
      </TabsContent>
      <TabsContent value='register'>
        <AuthRegister />
      </TabsContent>
    </Tabs>
  );
}
