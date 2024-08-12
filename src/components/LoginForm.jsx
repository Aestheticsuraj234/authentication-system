import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState(""); // Create a state variable to store the email address
  const router = useNavigate(); // Create a router object to navigate to different pages

  const onMagicLinkClick = async () => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
    });

    if (error) {
      console.log("Error: ", error.message);
    }

    if (data) {
      console.log("Data: ", data);
      router.push("/app"); // Redirect to the app after login
    }
  };

  const onGoogleClick = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log("Error: ", error.message);
    }

    if (data) {
      console.log("Data: ", data);
      router.push("/app"); // Redirect to the app after login
    }
  };

  const onGitHubClick = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) {
      console.log("Error: ", error.message);
    }

    if (data) {
      console.log("Data: ", data);
      router.push("/app"); // Redirect to the app after login
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign in to your account</h1>
          <p className="mt-2 text-muted-foreground">Enter your email below to sign in with a magic link.</p>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="m@example.com" className="mt-1" />
          </div>
          <Button onClick={onMagicLinkClick} type="submit" className="w-full">
            Sign in with magic link
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={onGoogleClick} variant="outline" className="w-full">
              <ChromeIcon className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
            <Button onClick={onGitHubClick} variant="outline" className="w-full">
              <GitlabIcon className="mr-2 h-4 w-4" />
              Sign in with GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

