import Link from "next/link"
export default function Navigation (){
    return (
        <ul className="flex items-center gap-4 text-xl font-semibold text-primary-100">
            <li>
                <Link href="/cabins">Cabin</Link> 
            </li>
            <li>
                <Link href="/about">About</Link> 
            </li>
            <li>
                <Link href="/account">Account</Link> 
            </li>
        </ul>
    )
}