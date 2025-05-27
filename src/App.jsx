import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './Form'
import Template1 from './Template/Template1'
import Template2 from './Template/Template2'
import Template3 from './Template/Template3'
import Template4 from './Template/Template4'
import Template5 from './Template/Template5'
import Template6 from './Template/Template6'
import Template7 from './Template/Template7'
import Template8 from './Template/Template8'
import TemplateListing from './TemplateListing'
import UserContextProvider from './Context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <div className="px-5">
        <BrowserRouter>
          <Routes>
            {/* Example Routes */}
            <Route path="/" element={<Form />} />
            <Route path="/template-listing" element={<TemplateListing />} />

            <Route path="/templates/template1" element={<Template1 />} />
            <Route path="/templates/template2" element={<Template2 />} />
            <Route path="/templates/template3" element={<Template3 />} />
            <Route path="/templates/template4" element={<Template4 />} />
            <Route path="/templates/template5" element={<Template5 />} />
            <Route path="/templates/template6" element={<Template6 />} />
            <Route path="/templates/template7" element={<Template7 />} />
            <Route path="/templates/template8" element={<Template8 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  )
}

export default App
