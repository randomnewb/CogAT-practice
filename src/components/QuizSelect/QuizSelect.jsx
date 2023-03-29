import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    Dialog,
    DialogTitle,
    Button,
    Typography,
    List,
    ListItem,
    ListItemButton,
} from "@mui/material";

function QuizSelect() {
    const history = useHistory();
    const user = useSelector((store) => store.user);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const selectedOutline = {
        outline: "skyblue solid 4px",
    };

    const hoverOutline = {
        outline: "orange solid 4px",
    };

    return (
        <>
            <div className="container">
                <Typography variant="h2">Welcome, {user.username}!</Typography>
            </div>
            <div className="container">
                <Typography variant="h3">Select a Quiz</Typography>
            </div>
            <div className="container">
                <img
                    src="https://res.cloudinary.com/dartlv0ee/image/upload/v1678664525/images/fast-forward-button_tqs3us.png"
                    alt="Quick Quiz Button"
                    style={{ width: "100px", height: "100px" }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.outline = hoverOutline.outline;
                        e.currentTarget.style.outlineOffset = "-4px";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.outline = "";
                        e.currentTarget.style.outlineOffset = "";
                    }}
                    onClick={handleClickOpen}
                />
                <Dialog
                    open={open}
                    onClose={handleClose}>
                    <DialogTitle>
                        Are you sure you want to start the quiz?
                    </DialogTitle>
                    <List
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <ListItem
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{
                                    margin: "10px",
                                }}
                                onClick={() => {
                                    history.push("/quiz");
                                }}>
                                Yes
                            </Button>
                        </ListItem>
                        <ListItem
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{
                                    margin: "10px",
                                }}
                                onClick={() => {
                                    history.push("/user");
                                }}>
                                No
                            </Button>
                        </ListItem>
                    </List>
                </Dialog>
                <br />
                <img
                    src="https://res.cloudinary.com/dartlv0ee/image/upload/v1678664525/images/gears_1_fgqyqu.png"
                    alt="Custom Quiz Button"
                    style={{ width: "100px", height: "100px" }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.outline = hoverOutline.outline;
                        e.currentTarget.style.outlineOffset = "-4px";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.outline = "";
                        e.currentTarget.style.outlineOffset = "";
                    }}
                />
            </div>
        </>
    );
}

export default QuizSelect;
