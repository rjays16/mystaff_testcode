import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function Sidebar(): React.JSX.Element {
  return (
    <Box>
      <Box>
        <Box>
          <Box>
            <Box>
            </Box>
            <Box>
              <Box>
                Chrissie Lee
              </Box>
              <span>
                Client
              </span>
            </Box>
          </Box>
          <Box
          component="img"
          src="/assets/Chrissie.png"
          sx={{ 
            margin: '0 40px 20px 40px',  
            display: 'flex', 
            flexDirection: 'row', 
            alignSelf: 'flex-start',  
            width: 'fit-content',
            boxSizing: 'border-box' 
        }}/>
        <Box>
        </Box>
        <Box>
            <Divider/>
          <Box>
            CONTACT INFORMATION
          </Box>
          <Box>
            <Box>
            <Box
          component="img"
          src="/assets/email.png"/>
              <span >
                Email
              </span>
            </Box>
            <span>
              chrissielee@gmail.com
            </span>
          </Box>
          <Box>
            <Box>
            <Box
          component="img"
          src="/assets/phone.png"/>
              <span>
                Phone
              </span>
            </Box>
            <span>
              +01 234 567 8910
            </span>
          </Box>
          <Box>
            <Box>
            <Box
          component="img"
          src="/assets/address.png"
         />
              <span>
                Address
              </span>
            </Box>
            <span>
              1st Avenue, Golden Street,<br />
              Springville Village,<br />
              San Diego, California
            </span>
          </Box>
        </Box>
      </Box>
      <Box>
      </Box>
      <Divider/>
      <Box>
        <Box >
          CLINIC DETAILS
        </Box>
        <Box>
          <Box>
          </Box>
          <Box>
            <Box>
              Silvervale Towers
            </Box>
            <span>
              Los Angeles
            </span>
          </Box>
        </Box>
        <Box>
          <Box>
            <Box>
            <Box
          component="img"
          src="/assets/email.png"
          sx={{ 
            margin: '0 40px 20px 40px',  
            display: 'flex', 
            flexDirection: 'row', 
            alignSelf: 'flex-start',  
            width: 'fit-content',
            boxSizing: 'border-box' 
        }}/>
              <span>
                Email
              </span>
            </Box>
            <span>
              branch1@gmail.com
            </span>
          </Box>
          <Box>
            <Box>
            <Box
          component="img"
          src="/assets/phone.png"
          sx={{ 
            margin: '0 40px 20px 40px',  
            display: 'flex', 
            flexDirection: 'row', 
            alignSelf: 'flex-start',  
            width: 'fit-content',
            boxSizing: 'border-box' 
        }}/>
              <span>
                Phone
              </span>
            </Box>
            <span>
              +01 234 567 8910
            </span>
          </Box>
          <Box>
            <Box>
            <Box
          component="img"
          src="/assets/address.png"
          sx={{ 
            margin: '0 40px 20px 40px',  
            display: 'flex', 
            flexDirection: 'row', 
            alignSelf: 'flex-start',  
            width: 'fit-content',
            boxSizing: 'border-box' 
        }}/>
              <span>
                Address
              </span>
            </Box>
            <span>
              4th Floor, RM 402,<br />
              Blk 2, 13 Johnson Street,<br />
              Silvervale Towers,<br />
              Los Angeles, California 
            </span>
          </Box>
        </Box>
      </Box>
      <Box>
      </Box>
      <Divider/>
      <Box>
        <Box >
          PET DETAILS
        </Box>
        <Box >
          <Box>
          </Box>
          <Box >
            <Box>
              Brownie
            </Box>
            <span>
              Dog
            </span>
          </Box>
        </Box>
        <Box >
          <Box>
            <Box>
            <Box
          component="img"
          src="/assets/breed.png"
         />
              <span>
                Breed
              </span>
            </Box>
            <span>
              French Bulldog
            </span>
          </Box>
          <Box>
            <Box>
            <Box
          component="img"
          src="/assets/sex.png"
         />
              <div>
                Sex
              </div>
            </Box>
            <Box>
              Male
            </Box>
          </Box>
          <Box>
            <Box>
            <Box
          component="img"
          src="/assets/age.png"
          />
              <span>
                Age
              </span>
            </Box>
            <span >
              10 months
            </span>
          </Box>
          <Box>
            <Box>
            <Box
          component="img"
          src="/assets/birthday.png"
         />
              <span >
                Birthday
              </span>
            </Box>
            <span>
              January 12, 2023
            </span>
          </Box>
        </Box>
      </Box>
      <Box>
      </Box>
      <Divider/>
      <Box>
        <Box>
          <span>
            Reschedule Appointment
          </span>
        </Box>
      </Box>
      <Box>
        <Box>
          <span>
            Cancel Appointment
          </span>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}
