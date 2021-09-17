import * as React from "react"
import { QuestionsList } from "../../Data/CommonQuestionsData"

const CommonQuestions = () => {
    const [list, setList] = React.useState(QuestionsList)
    const showHandler = (id:number) => {
        setList(list.filter((item)=>{
            if(item.id === id){
                item.show = !item.show
            }
            return item;
        }))
    }
  return (
    <>
      <section id="faq-accordion">
        <div className="container">
          <div className="col-md-9 col-center">
            <h2>Most common questions</h2>
            {list.map((item) => {
                return(
                    <div key={item.id} className="panel panel-default" onClick={() => showHandler(item.id)}>
                        <div className="panel-heading">
                        <h4 className="panel-title">
                            <a
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse1"
                            aria-expanded={item.show ? true : false}
                            >
                            {item.question}
                            </a>
                        </h4>
                        </div>
                        <div id="collapse1" className={`panel-collapse in collapse ${item.show && "show"}`}>
                        <div className="panel-body">
                            {item.answer}
                        </div>
                        </div>
                    </div>
                    )
                })}
          </div>
        </div>
      </section>
    </>
  )
}

export default CommonQuestions
