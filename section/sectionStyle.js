export const styles = {
  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    position: "relative",
    background: "linear-gradient(to right, #d9dbde, #242738)",
    overflow: "hidden",
  },
  left: {
    backgroundColor: "#d9dbde",
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "100px",
    color: "white",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
    transition: "box-shadow 0.3s ease, background-color 0.3s ease",
  },
  left2: {
    backgroundColor: "#d9dbde",
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    color: "white",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
    transition: "box-shadow 0.3s ease, background-color 0.3s ease",
  },
  
  right: {
    backgroundColor: "#242738",
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "100px",
    color: "white",
  },
  right2: {
    backgroundColor: "#242738",
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    color: "white",
  },
  s: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 5,
    width: "40%",
    height: "80%",
    filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.5))",
    display: "",
  },
  s2: {
    display: "none",
  },
  watch: {
    position: "absolute",
    top: "19%",
    left: "33.80%",
    zIndex: 7,
    width: "30%",
    height: "55%",
    filter: "drop-shadow(15px 70px 40px rgba(0, 0, 0, 4))",
  },
  watch2: {
    position: "absolute",
    top: "50%",
    left: "48%",
    transform: "translate(-50%, -50%)",
    zIndex: 30,
    width: "45%",
    height: "50%",
    filter: "drop-shadow(15px 70px 40px rgba(0, 0, 0, 4))",
  },
  letter: {
    fontSize: "80px",
    fontWeight: "900",
    textAlign: "center",
    zIndex: 15,
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    transition: "all 0.3s ease",
  },
  letter2: {
    
    fontSize: "40px", 
    fontWeight: "900",
    textAlign: "center",
    zIndex: 15,
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    transition: "all 0.3s ease",
  },
  
  letterHover: {
    color: "#5b5a5e",
    textShadow: "5px 5px 15px #e8a166",
    transform: "scale(1.1)",
  },
  topLeftLine: {
    position: "absolute",
    top: "20%",
    left: "25%",
    zIndex: "10",
    width: "250px",
    background: "black",
    height: "2px",
    border: "none",
  },
  bottomLeftLine: {
    position: "absolute",
    bottom: "20%",
    left: "25%",
    zIndex: "10",
    width: "250px",
    background: "black",
    height: "2px",
    border: "none",
  },
  topRightLine: {
    position: "absolute",
    top: "20%",
    right: "25%",
    zIndex: "10",
    width: "250px",
    background: "white",
    height: "2px",
    border: "none",
  },
  bottomRightLine: {
    position: "absolute",
    bottom: "20%",
    right: "25%",
    zIndex: "10",
    width: "250px",
    background: "white",
    height: "2px",
    border: "none",
  },
  exploreButton: {
    position: "absolute",
    top: "83%",
    left: "51.7%",
    transform: "translate(-60%, -50%)",
    zIndex: "10",
    background: "white",
    height: "40px",
    width: "180px",
    border: "none",
    borderRadius: "12px",
  },
  leftTop: {
    position: "absolute",
    top: "16%",
    left: "19%",
    color: "black",
    zIndex: 5,
  },
  leftBottom: {
    position: "absolute",
    bottom: "16%",
    left: "19%",
    color: "black",
  },
  rightTop: {
    position: "absolute",
    top: "16%",
    right: "17%",
    color: "white",
  },
  rightBottom: {
    position: "absolute",
    bottom: "16%",
    right: "17%",
    color: "white",
  },  
};
