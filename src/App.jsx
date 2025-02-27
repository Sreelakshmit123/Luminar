
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';

function App() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    Name: yup.string().required("Required"),
    contactNumber: yup.string().matches(/^[0-9]{10}$/, "Contact number must be 10 digits").required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    city: yup.string().min(2, "Must be at least 2 characters long").required("Required"),
    course: yup.string().required("Please select a course"),
    message: yup.string().min(2, "Must be at least 2 characters long").required("Required"),
    terms: yup.bool().required().oneOf([true]),
  });

  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-body-white">
          <Container>
            <Navbar.Brand id='home' href="#home"><img style={{ width: '250px', height: '80px' }} src="https://www.luminartechnolab.com/static/assets/img/logo/logo.png" alt="" /></Navbar.Brand>

          </Container>
        </Navbar>
        <div className="container ">
          <div className="row m-5">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 pt-5">
              <h1 style={{ color: 'rgb(87, 13, 128)', fontSize: '65px' }} >Contact Us</h1>
              <div className="contactdetails pt-5 pb-5 ps-3">
                <div className='d-flex'>
                  <img style={{ height: '80px' }} className='border rounded-circle bg-light ' src="https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid" alt="phone icon" />
                  <a href='' style={{ fontSize: '18px',textDecoration:'none ',color:'black' }} className='contacttext pb-4 ps-4 mt-1 '>
                    <p style={{ color: 'rgb(87, 13, 128)' }} className='fw-bold'>Call us on:</p>
                    <p>Call: +91 8086 651 651</p>
                  </a>
                </div>
                <div className='d-flex'>
                  <img style={{ height: '80px' ,textDecoration:'none ',color:'black'}} className='mt-3' src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" alt="email icon" />
                  <a href='' style={{ fontSize: '17px' ,textDecoration:'none ',color:'black'}} className='contacttext pb-4 ps-4 mt-1 '>
                    <p style={{ color: 'rgb(87, 13, 128)' }} className='fw-bold'>Email us at:</p>
                    <p>Enquiry: contact@luminartechnolab.com</p>
                    <p>Placement Cell: hr@luminartechnolab.com</p>
                  </a>
                </div>
                <div className='d-flex mt-2'>
                  <img style={{ height: '76px' }} src="https://cdn-icons-png.flaticon.com/512/733/733641.png" alt="whatsapp icon" />
                  <a href='' style={{ fontSize: '18px',textDecoration:'none ',color:'black' }} className='contacttext pb-4 ps-4 mt-1 '>
                    <p style={{ color: 'rgb(87, 13, 128)' }} className='fw-bold'>Contact us on:</p>
                    <p>WhatsApp</p>
                  </a>
                </div>
                <div className='d-flex mt-4'>
                  <img style={{ height: '83px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_8Bzg-V9TBk6miBLb3e7ZgvqYu9Jd_ufkVqepCb5MLiaTOSbQxtYq1sPfetcaUxcl-0&usqp=CAU" alt="map icon" />
                  <a href='https://maps.app.goo.gl/TufGPdaDDK6uGNPk7' target="_blank" style={{ fontSize: '18px' ,textDecoration:'none ',color:'black'}} className='contacttext pb-4 ps-4 mt-1 '>
                    <p style={{ color: 'rgb(87, 13, 128)' }} className='fw-bold'>Locate us on:</p>
                    <p>Google Map</p>
                  </a>
               
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <p style={{ fontSize: '35px' }}>How can we be of assistance?</p>
              <p>If you require clarifications on any of the courses or the admission process, <br /> we are happy to help</p>
              <br />
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  Name: '',
                  contactNumber: '',
                  email: '',
                  city: '',
                  course: '',
                  message: '',
                  terms: false,
                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form noValidate onSubmit={handleSubmit} >
                    <Form.Control size="lg" type="text" placeholder="Name" name="Name" value={values.Name} onChange={handleChange} isInvalid={!!errors.Name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.Name}</Form.Control.Feedback>
                    <br />
                    <Form.Control size="lg" type="tel" placeholder="Contact Number" name="contactNumber" value={values.contactNumber} onChange={handleChange} isInvalid={!!errors.contactNumber} />
                    <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
                    <br />
                    <Form.Control size="lg" type="email" placeholder="Email id" name="email" value={values.email} onChange={handleChange} isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    <br />
                    <Form.Control size="lg" type="text" placeholder="City" name="city" value={values.city} onChange={handleChange} isInvalid={!!errors.city}
                    />
                    <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                    <br />
                    <Form.Select style={{ width: "100%", height: '50px' }} name="course" value={values.course} onChange={handleChange} isInvalid={!!errors.course}
                    >
                      <option value="">Please select Course</option>
                      <option value="1">Software Testing and Training - Manual and Automation</option>
                      <option value="2">PYTHON DATA SCIENCE - ML - AL - & Power BI</option>
                      <option value="3">MEA(R)N Stack Web Development Expert - Angular & React</option>
                      <option value="4">Python Django - React - Full Stack Web Development Expert</option>
                      <option value="5">Asp.net MVC with Angular - Full Stack</option>
                      <option value="6">Android With Flutter -  Mobile Application Development</option>
                      <option value="7">Java Spring Full Stack Development</option>
                      <option value="8">Imported Course</option>
                      <option value="9">Robitcs with AI</option>
                      <option value="10">Academic Project</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.course}</Form.Control.Feedback>
                    <br />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" rows={6} placeholder="Enquiry/ Message / Questions" name="message" value={values.message} onChange={handleChange}
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Check className='valid ' required
                        name="terms"
                        label="By registering, I accept the TnC and Privacy Policy of the website and give my consent to send me updates via Messages/Email *."
                        onChange={handleChange}
                        isInvalid={!!errors.terms}
                        feedback={errors.terms}
                        id="validationFormik0"
                      />
                    </Form.Group>
                    <button className='submitbutton fw-bold' type="submit">SUBMIT</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      
      </div >
      <div class="up-arrow icon">
                <a href="#home"><i class="fa-solid fa-angle-up brand"></i></a>
            </div>
    </>
  )
}

export default App
