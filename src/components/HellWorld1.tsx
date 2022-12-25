
import { SetupContext,defineComponent } from "vue" 
type HelloWorldProps={

    name:string
}

const HelloWorld=(props:HelloWorldProps,context:SetupContext)=>{

    return <div>123</div>
}


// defineComponent({

//     render(){

//         return <div>123 </div>
//     }

// })

export default HelloWorld