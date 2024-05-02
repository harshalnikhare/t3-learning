"use client";
import { SignInButton, SignedOut, UserButton, SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
export default function TopNav() {
  const router = useRouter();
  return (
    <nav
      className="flex w-full items-center justify-between border-b
      p-4 text-xl font-semibold"
    >
      <div>Gallery</div>

      <div className="flex items-center justify-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
