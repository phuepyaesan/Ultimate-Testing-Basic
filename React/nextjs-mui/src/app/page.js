"use client";
import { Button, Typography, Box } from "@mui/material";
import MUIBox from "@/component/MUIbox";
import MUIContainer from "@/component/MUIContainer";
import MUIGrid from "@/component/MUIGrid";
import MUIStack from "@/component/MUIStack";
import MUISx from "@/component/MUISx";
import NavLayout from "@/component/NavLayout/NavLayout";
import RowAndColumnSpacing from "@/component/RowAndColumnSpacing";
import BasicForm from "@/component/BasicForm/BasicForm";
import ContactForm from "@/component/ContactForm/ContactForm";
export default function Home() {
  return (
    <div>
      {/* <Typography variant="h2" component="h1">
        Welcome to Next.js with MUI !
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      <MUIBox />
      <MUIContainer />
      <MUIGrid />
      <MUIStack />
      <MUISx /> */}
      {/* <NavLayout>
        <Box>
          <Typography>Nav Layout Children Content</Typography>
        </Box>
      </NavLayout> */}
      {/* <RowAndColumnSpacing /> */}
      {/* <BasicForm /> */}
      <ContactForm />
    </div>
  );
}
