import '../App.css';
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme
} from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";

function Card() {

    const loadapi = () => {
        const userid = document.getElementById('user-id').value
        const largeapi = `http://localhost:3001/api/card/${userid}`
        const largesvgdiv = document.getElementById('large-api')
        largesvgdiv.innerHTML = `<img src="${largeapi}" alt="">`

        const smallapi = `http://localhost:3001/api/compact/${userid}`
        const smallsvgdiv = document.getElementById('small-api')
        smallsvgdiv.innerHTML = `<img src="${smallapi}" alt="">`
    }

    return (
        <div className="App">
            <div className="main">
                <header className="header">
                    <h2 className="title">Breeze API</h2>
                </header>
                <Box
                    display="grid"
                    gap="10px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        width: '100%',
                        maxWidth: 500,
                        mb: 2,
                    }}
                    // align items center
                    className="inputs"
                >
                    <TextField
                        id="user-id"
                        className='user-id'
                        label="User ID"
                        variant="outlined"
                        {...(useMediaQuery(useTheme().breakpoints.down('sm')) && { size: 'small' })}
                        sx={{
                            width: '100%',
                            maxWidth: 250,
                            mb: 2,
                            gridColumn: "span 2",
                            input: {
                                color: "#99aab5",
                                fontSize: "0.80rem",
                                fontFamily: "Inter",
                                height: "1.5rem",
                            }   
                        }}
                        InputLabelProps={{
                            sx: {
                                color: "rgb(77, 154, 255)",
                                [`&.${inputLabelClasses.shrink}`]: {
                                    color: "rgb(77, 154, 255)",
                                }
                            }
                        }}
                    />
                    <TextField
                        id="about-me"
                        className='about-me'
                        label="About Me"
                        variant="outlined"
                        {...(useMediaQuery(useTheme().breakpoints.down('sm')) && { size: 'small' })}
                        sx={{
                            width: '100%',
                            maxWidth: 250,
                            mb: 2,
                            gridColumn: "span 2",
                            input: {
                                color: "#99aab5",
                                fontSize: "0.80rem",
                                fontFamily: "Inter",
                                height: "1.5rem",
                            }  
                        }}
                        InputLabelProps={{
                            sx: {
                                color: "rgb(77, 154, 255)",
                                [`&.${inputLabelClasses.shrink}`]: {
                                    color: "rgb(77, 154, 255)"
                                }
                            }
                        }}
                    />

                    <TextField
                        id="banner-url"
                        className='banner-url'
                        label="Banner URL"
                        variant="outlined"
                        {...(useMediaQuery(useTheme().breakpoints.down('sm')) && { size: 'small' })}
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            mb: 2,
                            gridColumn: "span 4",
                            input: {
                                color: "#99aab5",
                                fontSize: "0.80rem",
                                fontFamily: "Inter",
                                height: "1.5rem",
                            }  
                        }}
                        InputLabelProps={{
                            sx: {
                                color: "rgb(77, 154, 255)",
                                [`&.${inputLabelClasses.shrink}`]: {
                                    color: "rgb(77, 154, 255)"
                                }
                            }
                        }}
                    />
                    <TextField
                        id="large-image-url"
                        className='large-image-url'
                        label="Large Image URL"
                        variant="outlined"
                        {...(useMediaQuery(useTheme().breakpoints.down('sm')) && { size: 'small' })}
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            mb: 2,
                            gridColumn: "span 4",
                            input: {
                                color: "#99aab5",
                                fontSize: "0.80rem",
                                fontFamily: "Inter",
                                height: "1.5rem",
                            }   
                        }}
                        InputLabelProps={{
                            sx: {
                                color: "rgb(77, 154, 255)",
                                [`&.${inputLabelClasses.shrink}`]: {
                                    color: "rgb(77, 154, 255)"
                                }
                            }
                        }}
                    />
                    <TextField
                        id="small-image-url"
                        className='small-image-url'
                        label="Small Image URL"
                        variant="outlined"
                        {...(useMediaQuery(useTheme().breakpoints.down('sm')) && { size: 'small' })}
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            mb: 2,
                            gridColumn: "span 4",
                            input: {
                                color: "#99aab5",
                                fontSize: "0.80rem",
                                fontFamily: "Inter",
                                height: "1.5rem",
                            }  
                        }}
                        InputLabelProps={{
                            sx: {
                                color: "rgb(77, 154, 255)",
                                [`&.${inputLabelClasses.shrink}`]: {
                                    color: "rgb(77, 154, 255)"
                                }
                            }
                        }}
                    />
                    <TextField
                        id="hex-code"
                        className='hex-code'
                        label="Hex Code"
                        variant="outlined"
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            mb: 2,
                            gridColumn: "span 1",
                            input: {
                                color: "#99aab5"
                            } 
                        }}
                        {...(useMediaQuery(useTheme().breakpoints.down('sm')) && { 
                            size: 'small',
                            sx: {
                                width: '100%',
                                maxWidth: 500,
                                mb: 2,
                                gridColumn: "span 2",
                                input: {
                                    color: "#99aab5",
                                    fontSize: "0.80rem",
                                    fontFamily: "Inter",
                                    height: "1.5rem",
                                }  
                            }
                        })}
                        InputLabelProps={{
                            sx: {
                                color: "rgb(77, 154, 255)",
                                [`&.${inputLabelClasses.shrink}`]: {
                                    color: "rgb(77, 154, 255)"
                                }
                            }
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={loadapi}
                        sx={{ 
                            width: '100%', 
                            height: '100%',
                            maxWidth: 500, 
                            maxHeight: 55,
                            mb: 2, 
                            backgroundColor: 'rgb(77, 154, 255)', 
                            alignSelf: 'center', 
                            gridColumn: "span 3",
                            color: "#23272a",
                        }}
                        {...(useMediaQuery(useTheme().breakpoints.down('sm')) && { 
                            sx: {
                                width: '100%', 
                                height: '100%',
                                maxWidth: 500, 
                                maxHeight: 40,
                                mb: 2, 
                                backgroundColor: 'rgb(77, 154, 255)', 
                                alignSelf: 'center', 
                                gridColumn: "span 2",
                                color: "#23272a",
                            }
                         })}
                    >
                        Load API
                    </Button>
                    
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            mb: 2,
                            gridColumn: "span 4",
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '1px solid rgb(77, 154, 255)',
                            paddingTop: '1rem',
                            paddingBottom: '1rem',

                        }}
                    >
                        <Typography variant="h7" component="div" sx={{
                            color: 'rgb(77, 154, 255)',
                            mb: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: "comic sans ms"
                        }}>
                            Large Card
                        </Typography>
                        <div>
                            <div id="large-api" className="large-api"/>
                        </div>
                        <Typography variant="h7" component="div" sx={{
                            color: 'rgb(77, 154, 255)',
                            mb: 2,
                            mt: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: "comic sans ms"
                        }}>
                            Small Card
                        </Typography>
                        <div>
                            <div id="small-api" className="small-api" />
                        </div>
                    </Box>
                            
                </Box>

            </div>
        </div>
    );
}

export default Card;