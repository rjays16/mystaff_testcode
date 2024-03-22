import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function Sidebar(): React.JSX.Element {
  return (
    <Box sx={{
      position: 'relative',
      marginBottom: '65px',
      width: '400px',
      height: '964px',
    }}>
      <Box sx={{
        borderBottom: '1px solid #D8D3CC',
        background: '#FFFFFF',
        position: 'absolute',
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '-110px',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 0 19px 0',
        height: '100%',
        boxSizing: 'border-box',
      }}>
        <Box sx={{
          margin: '0 40px 20px 40px',
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'flex-start',
          width: 'fit-content',
          boxSizing: 'border-box',
        }}>
          <Box sx={{
            marginRight: '71.9px',
            display: 'flex',
            flexDirection: 'row',
            boxSizing: 'border-box',
          }}>
            <Box sx={{
              borderRadius: '100px',
              background: 'url("/assets/Chrissie.png") 50% / cover no-repeat',
              marginRight: '24px',
              width: '80px',
              height: '80px',
            }} />
            <Box sx={{
              margin: '14px 0',
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box',
            }}>
              <Box sx={{
                marginBottom: '4px',
                display: 'inline-block',
                overflowWrap: 'break-word',
                fontFamily: 'Urbanist',
                fontWeight: 700,
                fontSize: '24px',
                letterSpacing: '0.5px',
                color: '#1C1C1E',
              }}>
                Chrissie Lee
              </Box>
              <span style={{
                alignSelf: 'flex-start',
                overflowWrap: 'break-word',
                fontFamily: 'Urbanist',
                fontWeight: 500,
                fontSize: '16px',
                letterSpacing: '0.3px',
                color: '#9D9C9C',
              }}>
                Client
              </span>
            </Box>
          </Box>
        </Box>
        <Divider/>
        <Box sx={{
          margin: '0 40px 20px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'flex-start',
          width: 'fit-content',
          boxSizing: 'border-box',
        }}>
          <Box sx={{
            marginBottom: '20px',
            display: 'inline-block',
            alignSelf: 'flex-start',
            overflowWrap: 'break-word',
            fontFamily: 'Urbanist',
            fontWeight: 800,
            fontSize: '14px',
            letterSpacing: '0.3px',
            color: '#9D9C9C',
          }}>
            CONTACT INFORMATION
          </Box>
          <Box sx={{
            marginLeft: '1.7px',
            display: 'flex',
            flexDirection: 'column',
            width: 'fit-content',
            boxSizing: 'border-box',
          }}>
            <Box sx={{
              marginBottom: '21px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'flex-start',
              width: '282.5px',
              boxSizing: 'border-box',
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                boxSizing: 'border-box',
              }}>
                <Box sx={{
                  margin: '3.3px 9.7px 2.3px 0',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: '16.7px',
                  height: '13.3px',
                  boxSizing: 'border-box',
                }}>
                  <img src="/assets/email.png" />
                </Box>
                <span sx={{
                  overflowWrap: 'break-word',
                  fontFamily: 'Urbanist',
                  fontWeight: 500,
                  fontSize: '16px',
                  letterSpacing: '0.3px',
                  color: '#9D9C9C',
                }}>
                  Email
                </span>
              </Box>
              <span sx={{
                overflowWrap: 'break-word',
                fontFamily: 'Urbanist',
                fontWeight: 500,
                fontSize: '16px',
                letterSpacing: '0.3px',
                color: '#1C1C1E',
              }}>
                chrissielee@gmail.com
              </span>
            </Box>
            <Box sx={{
              marginBottom: '21px', 
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'flex-start',
              width: '238.2px',
              boxSizing: 'border-box',
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                boxSizing: 'border-box',
              }}>
                <Box sx={{
                  margin: '2.1px 10.1px 1.4px 0',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: '15.5px',
                  height: '15.5px',
                  boxSizing: 'border-box',
                }}>
                  <img src='/assets/phone.png' />
                </Box>
                <span sx={{
                  overflowWrap: 'break-word',
                  fontFamily: 'Urbanist',
                  fontWeight: 500,
                  fontSize: '16px',
                  letterSpacing: '0.3px',
                  color: '#9D9C9C',
                }}>
                  Phone
                </span>
              </Box>
              <span sx={{
                overflowWrap: 'break-word',
                fontFamily: 'Urbanist',
                fontWeight: 500,
                fontSize: '16px',
                letterSpacing: '0.3px',
                color: '#1C1C1E',
              }}>
                +01 234 567 8910
              </span>
            </Box>
            <Box sx={{
              marginLeft: '1.7px',
              display: 'flex',
              flexDirection: 'row',
              width: 'fit-content',
              boxSizing: 'border-box',
            }}>
              <Box sx={{
                margin: '0 30.6px 38px 0',
                display: 'flex',
                flexDirection: 'row',
                boxSizing: 'border-box',
              }}>
                <Box sx={{
                  margin: '1.7px 11.3px 0.7px 0',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width
                  : '13.3px',
                  height: '16.7px',
                  boxSizing: 'border-box',
                }}>
                  <img src="/assets/address.png" />
                </Box>
                <span sx={{
                  overflowWrap: 'break-word',
                  fontFamily: 'Urbanist',
                  fontWeight: 500,
                  fontSize: '16px',
                  letterSpacing: '0.3px',
                  color: '#9D9C9C',
                }}>
                  Address
                </span>
              </Box>
              <span sx={{
                overflowWrap: 'break-word',
                fontFamily: 'Urbanist',
                fontWeight: 500,
                fontSize: '16px',
                letterSpacing: '0.3px',
                color: '#1C1C1E',
              }}>
                1st Avenue, Golden Street,<br />
                Springville Village,<br />
                San Diego, California
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
