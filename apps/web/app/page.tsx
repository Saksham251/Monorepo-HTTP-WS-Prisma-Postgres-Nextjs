import {client} from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      FirstName: Saksham 
      LastName: Singhal
      {user?.username}
      {user?.password}
    </div>
  );
}
