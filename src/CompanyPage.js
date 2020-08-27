import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Button, Card} from "@material-ui/core";
import {InputText} from "primereact/inputtext";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ListForCompany from "./ListForCompany";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        maxHeight: 440,
    },
}));
export default function CompanyPage() {
    const classes = useStyles();
    const theme = useTheme();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <Button style={{marginTop: '2em',marginBottom: '2em',left:'90%'}}>Add Event</Button>
            <div className="p-inputgroup">
                <InputText style= {{marginBottom:'1em',marginLeft:'1em',marginRight:'1em'}} placeholder="Search..." />
                <br/>
            </div>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Current Events">
                        </Tab>
                        <Tab label="Past Events" />
                        <Tab label="All Events" />
                    </Tabs>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <ListForCompany></ListForCompany>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                   <ListForCompany/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <ListForCompany></ListForCompany>
                </TabPanel>
            </SwipeableViews>

        </div>
    );
}
