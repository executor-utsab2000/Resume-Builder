import React from 'react'
import { Link } from 'react-router-dom'
import {templates} from './Data/template'
import TemplateCards from './Components/TemplateCards'






const TemplateListing = () => {
    return (
        <>
            <h2 className="text-center mb-5">Template Listing</h2>
            <div className="imagesContainer">
                <div className="row">
                    {
                        templates.map((elm) => {
                            return (
                                <div className="col-lg-3 col-md-4 my-3 d-flex justify-content-center mx-auto">
                                    <Link to={`/templates/${elm.templateUrl}`}>
                                     <TemplateCards image={elm.templateImage} caption={elm.templateTitle}/>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TemplateListing