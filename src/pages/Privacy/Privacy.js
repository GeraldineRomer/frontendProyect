import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
    <div
        role="tabpanel1" // Corregí el valor del atributo role
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`} // Corregí el atributo aria-aria-labelledby a aria-labelledby
        {...other}
    >
        {value === index && (
        <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
        </Box>
        )}
    </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export const Privacy = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Politica redes sociales" {...a11yProps(0)} />
                    <Tab label="Avisos legales" {...a11yProps(1)} />
                    <Tab label="Politica de privacidad" {...a11yProps(2)} />
                    <Tab label="Politica de Tratamiento de DAtos"{...a11yProps(3)}/>
                    <Tab label="Protección al consumidor"{...a11yProps(4)}/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                De conformidad con lo dispuesto en la Ley 1581 de 2012 y el Decreto 1377 de 2013, declaro que entrego de forma libre y 
                voluntaria mis Datos Personales, que he leído y aceptado estos términos y condiciones de manera previa y autorizo a Mazda de Colombia S.A.S. (en adelante “MCOL”), para que, como Responsable, realice la recolección y tratamiento de mis datos personales para las finalidades indicadas más adelante y de conformidad con la Política de tratamiento de la información de MCOL
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div> 
                    Mazda de Colombia S.A.S. no otorga premios o realiza juegos promocionales relacionados con sus vehículos. Por tanto, se advierte a los clientes, prospectos y al público en general que la compañía no es promotora, anunciante ni avala ninguna promoción de esta naturaleza, particularmente aquellas que puedan ser enviadas a través de mensajes SMS o de cualquier otro medio con enlaces a nuestro Sitio Web.
                </div>
                <div>
                    En caso recibir este tipo de mensaje, debe tener en cuenta que se trata de una actividad no autorizada por nuestra marca y posiblemente fraudulenta. De recibir este tipo de mensajes, puede contactarnos al Teléfono: (+57) (1) 2357529, Línea Nacional 01 8000 112 595 o al correo electrónico: servicioalcliente@mazda.co. 
                </div>
                <div>
                    Teniendo en cuenta lo anterior, Mazda de Colombia S.A.S. no será responsable de cualquier promoción, concurso, sorteo o evento que sea publicado fuera de sus medios oficiales de comunicación.
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <div>
                    De conformidad con lo dispuesto en la Ley 1581 de 2012 y el Decreto 1377 de 2013, declaro que entrego de forma libre y voluntaria mis Datos Personales y con mi aceptación y/o firma autorizo a Mazda de Colombia S.A.S. (en adelante "MCC)L"), para que, como Responsable, realice Ia recolección y tratamiento de mis datos personales para las finalidades indicadas más adelante y de conformidad con la Política de tratamiento de la información de MCOL
                </div>
                <div>
                    Información demográfica y socioeconómica. Por ejemplo, edad, género, educación, profesión, ocupación, salario, ingreso familiar, actividad económica preferencias e intereses.
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <div>
                    MAZDA DE COLOMBIA S.A.S. (en adelante, MAZDA) es responsable de los Datos Personales e información que le suministran sus clientes, prospectos de clientes proveedores, contratistas, y visitantes (en adelante, los Titulares).
                </div>
                <div>
                    En la presente Política de Tratamiento se establecen las finalidades, medidas y procedimientos de las Bases de Datos de MAZDA así como los mecanismos con que los Titulares cuentan para conocer, actualizar, rectificar, suprimir los datos suministrados o revocar la autorización que se otorga con la aceptación de la presente Política de Tratamiento.
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <div>
                    1. Protección de los consumidores frente a los riesgos para su salud y seguridad.
                </div>
                <div>
                    2. Acceso a una información adecuada que permita elecciones bien fundadas.
                </div>
                <div>
                    3. Educación del consumidor.
                </div>
                <div>
                    4. Libertad de constituir organizaciones de consumidores para expresar sus opiniones.
                </div>
                <div>
                    5. Protección especial a los niños, niñas y adolescentes, en su calidad de consumidores.
                </div>
            </CustomTabPanel>
        </Box>
    );
};