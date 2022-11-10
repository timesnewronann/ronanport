import {socials } from "../typings";

export const fetchSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    const data = await res.json()
    const socials:socials[] = data.socials;

    return socials;
}