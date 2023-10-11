import { randomUUID } from "crypto";
import Link from "next/link";

const Page = () => {

    return <div>
        <Link href={"/" + randomUUID()}>Navigate</Link>
    </div>
}

export default Page;