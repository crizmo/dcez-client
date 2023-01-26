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
const { useState } = require("react");

function Card() {

    const [largeUrl, setLargeUrl] = useState('')
    const [smallUrl, setSmallUrl] = useState('')    

    const loadapi = () => {
        const userid = document.getElementById('user-id').value

        const aboutme = document.getElementById('about-me').value
        const bannerurl = document.getElementById('banner-url').value
        const largeimageurl = document.getElementById('large-image-url').value
        const smallimageurl = document.getElementById('small-image-url').value
        let hexcolor = document.getElementById('hex-code').value


        if (!bannerurl.match(/\.(jpeg|jpg|gif|png)$/) != null && bannerurl !== '') {
            alert('Please enter a valid banner url')
            return
        } else if (!largeimageurl.match(/\.(jpeg|jpg|gif|png)$/) != null && largeimageurl !== '') {
            alert('Please enter a valid large image url')
            return
        } else if (!smallimageurl.match(/\.(jpeg|jpg|gif|png)$/) != null && smallimageurl !== '') {
            alert('Please enter a valid small image url')
            return
        } else if (!hexcolor.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) && hexcolor !== '') {
            alert('Please enter a valid hex code')
            return
        }

        if (hexcolor.charAt(0) === '#') {
            hexcolor = hexcolor.substring(1)
        }

        const largeapi = `https://breeze-api.kurizu.repl.co/api/card/${userid}?about=${aboutme}&banner=${bannerurl}&large_image=${largeimageurl}&small_image=${smallimageurl}&hex=${hexcolor}`

        const largesvgdiv = document.getElementById('large-api')
        largesvgdiv.innerHTML = `<img src="${largeapi}" alt="" class="card-img">`
        setLargeUrl(largeapi)

        const smallapi = `https://breeze-api.kurizu.repl.co/api/compact/${userid}?about=${aboutme}&banner=${bannerurl}&large_image=${largeimageurl}&small_image=${smallimageurl}&hex=${hexcolor}`

        const smallsvgdiv = document.getElementById('small-api')
        smallsvgdiv.innerHTML = `<img src="${smallapi}" alt="" class="card-img">`
        setSmallUrl(smallapi)
    }

    return (
        <div className="App">
            <div className="main">
                <Typography variant="h4" sx={{ 
                    mb: 2, 
                    color: "#99aab5",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "1.5rem",
                    textAlign: "center",
                    textTransform: "uppercase",
                    letterSpacing: "0.1rem",
                    lineHeight: "1.5rem",
                    width: "100%",
                    maxWidth: 500,
                    margin: "0 auto",
                    mt: 2,
                }}>
                    Discord Cards
                </Typography>
                <Box
                    display="grid"
                    gap="10px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        width: '100%',
                        maxWidth: 500,
                        mb: 2,
                    }}
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
                                fontSize: "0.90rem",
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
                        <div>
                            {largeUrl && 
                                <Button variant="contained" onClick={
                                    () => window.open(largeUrl, "_blank")
                                } sx={{
                                    width: '100%',
                                    maxWidth: 500,
                                    mb: 2,
                                    backgroundColor: 'rgb(77, 154, 255)',
                                    alignSelf: 'center',
                                    color: "#23272a",
                                    fontFamily: "comic sans ms",
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    Open Large Image
                                </Button>
                            }
                            <div id="large-api" className="large-api"/>
                        </div>
                        <div>
                            {smallUrl &&
                                <Button variant="contained" onClick={
                                    () => window.open(smallUrl, "_blank")
                                } sx={{
                                    width: '100%',
                                    maxWidth: 500,
                                    mb: 4,
                                    mt: 2,
                                    backgroundColor: 'rgb(77, 154, 255)',
                                    alignSelf: 'center',
                                    color: "#23272a",
                                    fontFamily: "comic sans ms",
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    Open Small Image
                                </Button>
                            }
                            <div id="small-api" className="small-api" />
                        </div>
                    </Box>
                            
                </Box>

            </div>
        </div>
    );
}

export default Card;