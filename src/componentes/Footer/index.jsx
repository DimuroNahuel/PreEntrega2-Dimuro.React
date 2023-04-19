import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';

function AppFooter() {
 
    
  
      return (
        <MDBFooter bgColor='light' className='text-center text-primary text-lg-left'>
          <MDBContainer className='p-5 '>
            <form action=''>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size='auto' className='mb-4 mb-md-0'>
                  <p className='pt-2'>
                    <strong>Suscribete a nuevos ingresos</strong>
                  </p>
                </MDBCol>
    
                <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                  <MDBInput type='text' id='form5Example2' label='Email address' contrast />
                </MDBCol>
    
                <MDBCol size='auto' className='mb-4 mb-md-0'>
                  <MDBBtn outline color='primary'>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBContainer>
    
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className='text-primary' target="_blank" href='https://linkedin.com/in/dimuro-nahuel/'>
              Dimuro Nahuel
            </a>
          </div>
        </MDBFooter>
      );
    }
export default AppFooter;