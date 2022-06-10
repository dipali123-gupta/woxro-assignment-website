import React from "react";
import "./Profession.css";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import Avatar from "@mui/material/Avatar";

function Profession() {
  const avatarBackgroundStyle = {
    backgroundImage: "url()",
    width: 100,
    height: 100,
  };
  return (
    <div>
      <Box
        sx={{
          width: "auto",
          height: 100,
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ padding: "20px" }}>
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
              }}
            >
              <div className="center-image">
                <img src="https://www.xentice.com/static/media/engineer.877f1aa6.png" />
              </div>
              <div style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                <Typography variant="body2" color="text.secondary">
                  Builder
                </Typography>
              </div>
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
              }}
            >
              <div className="center-image">
                <img src="https://www.ezloandocs.com/wp-content/uploads/2021/03/corporation.svg" />
              </div>
              <div style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                <Typography variant="body2" color="text.secondary">
                  Architects
                </Typography>
              </div>
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
              }}
            >
              <div className="center-image">
                <img src="https://www.xentice.com/static/media/finance.15ca8db9.png" />
              </div>
              <div style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                <Typography variant="body2" color="text.secondary">
                  Banking
                </Typography>
              </div>
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
              }}
            >
              <div className="center-image">
                <img src="https://www.xentice.com/static/media/admin.e6b7a902.png" />
              </div>
              <div style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                <Typography variant="body2" color="text.secondary">
                  IT Support
                </Typography>
              </div>
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
              }}
            >
              <div className="center-image">
                <img src="https://www.xentice.com/static/media/worker.ab3bc8e0.png" />
              </div>
              <div style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                <Typography variant="body2" color="text.secondary">
                  Labourers
                </Typography>
              </div>
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
              }}
            >
              <div className="center-image">
                <img src="https://cdn-images-1.medium.com/max/1200/1*Dnp19sa7G62q669cR3GxdA.png" />
              </div>
              <div style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                <Typography variant="body2" color="text.secondary">
                  Mentors
                </Typography>
              </div>
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
              }}
            >
              <div className="center-image">
                <img src="https://www.ownlydigital.com/images/icon/LAWYERS-1.png" />
              </div>
              <div style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                <Typography variant="body2" color="text.secondary">
                  Advocate
                </Typography>
              </div>
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
              }}
            >
              <div className="center-image">
                <img src="https://d1fdloi71mui9q.cloudfront.net/yDQS8jvcSfSiOi1kMPxz_wall.png" />
              </div>
              <div style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                <Typography variant="body2" color="text.secondary">
                  Insurance 
                </Typography>
              </div>
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
              }}
            >
              <div className="center-image">
                <img src="https://www.sociabuzz.com/blog/wp-content/uploads/2020/09/music-influencer-indonesia.png" />
              </div>
              <div style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                <Typography variant="body2" color="text.secondary">
                  Life Style
                </Typography>
              </div>
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
              }}
            >
              <div className="center-image">
                <img src="https://api.thehrmonkey.com/images/industry/convenience-store-mart.svg" />
              </div>
              <div style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                <Typography variant="body2" color="text.secondary">
                  Xentice Mart
                </Typography>
              </div>
            </div>
          </div>

         


        </div>
      </Box>
    </div>
  );
}

export default Profession;
