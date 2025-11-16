const input=document.getElementById("markdown-input")
const htmlOutput=document.getElementById("html-output")
const preview = document.getElementById("preview")

const convertMarkdown = ()=> {
 let markdown = input.value;
const regexHeading = /^(?<hashtag>#{1,6})\s(?<word>.+)$/gm;

markdown = markdown.replace(regexHeading, (match, _, __, ___, ____,groups)=>{
  return `<h${groups.hashtag.length}>${groups.word}</h${groups.hashtag.length}>`
});

const regexStrong = /(\*\*|__)(.*?)\1/g
markdown=markdown.replace(regexStrong,`<strong>$2</strong>`)

const regexEm = /(\*|_)(.*?)\1/g
markdown=markdown.replace(regexEm,`<em>$2</em>`)

const regexImg = /!\[(?<imgAlt>.*)\]\((?<imgSrc>.*)\)/g
markdown=markdown.replace(regexImg,(match,_,__,___,____,groups)=>{
  console.log("groups",groups)
  return `<img alt="${groups.imgAlt}" src="${groups.imgSrc}"/>`
})

const regexLink = /\[(?<linkText>.*)\]\((?<url>.*)\)/g
markdown=markdown.replace(regexLink,(match,_,__,___,____,groups)=>{
  return `<a href="${groups.url}">${groups.linkText}</a>`
})

const regexQuote = /^>\s(.*)/gm
markdown=markdown.replace(regexQuote,'<blockquote>$1</blockquote>')

return markdown
}



input.addEventListener('input',()=>{
  htmlOutput.innerText=convertMarkdown()
  preview.innerHTML=convertMarkdown()
})
