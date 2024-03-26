If you want to render text on page the use following instruction
data.items[0].fields.title
data.items[0].fields.description

# if you want to get rich text and render on page then use following instruction

1 . first of all install the "@contentful/rich-text-react-renderer"

2 . import it by using following instruction
"import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
"
3.the use following instruction to get data
"documentToReactComponents(item.fields.description)"

conclusion:

Run the map on data to get
1.title (that is plan text) 2. description (that is plan text) 3. image

{data.items.map((item: any) => {
return (
<>
Title:{item.fields.title}
Desciption: {item.fields.description}
<img src={item.fields.image.fields.file.url} width={90} alt="" />
</>
);
})}

for Ritch type text

Run the map on data to get
1.title (that is Ritch text) 2. description (that is plan text) 3. image

{data.items.map((item: any) => {
return (
<>
Title:{item.fields.title}
Desciption:{documentToReactComponents(item.fields.description)}
<img src={item.fields.image.fields.file.url} width={90} alt="" />
</>
);
})}
