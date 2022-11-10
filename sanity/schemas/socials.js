import { Rule } from "postcss";

export default {
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    {
      name:"title",
      title:"Title",
      description:"Title of social media",
      type:"string",
    },
    {
      name:"url",
      title:"Url",
      type:"url",
    },
  ],
}
