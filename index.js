const markdown=`# markdown 

## previewer

![moon](https://media.istockphoto.com/photos/blue-earth-seen-from-the-moon-surface-elements-of-this-image-are-by-picture-id1313489780?b=1&k=20&m=1313489780&s=170667a&w=0&h=RkgkibZvXxCGjeDLKZY_eGKbb-X6wk7HQTL89bdn_7g=)

1.This
2. is
3. a
4. list
5. .

The above is a **list**., yes a _list_   

1. bao
2. mian
3. yu

That was a \`list\`. 

	for (let number = 0; number <= 100; number++){
	console.log("Sheep" + number);
	};  
	
>laohu
>xiongmao
>ma

[twitter](https://twitter.com/)`

marked.setOptions({gfm:true,breaks:true})

function Editor({text, setText}){
    function handleChange(e){
        setText(e.target.value)
    }
    return(
        <textarea id="editor" value={text} onChange={handleChange}>{text}</textarea> 
    )
}

function Preview({text, setText}){
    const [markedText, setMarkedText] = React.useState("")
    React.useEffect(()=>{
        setMarkedText(marked.parse(text))
    },[text])
    React.useEffect(()=>{
        preview.innerHTML=markedText
    },[markedText])
    return(
        <div id="preview">{markedText}
        </div> 
    )
}

function App(){
    const [text, setText] = React.useState(markdown)
    return(
        <div className="flex app">
            <Editor text={text} setText={setText}/>
            <Preview text={text} setText={setText}/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))