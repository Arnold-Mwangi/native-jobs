import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    ...SHADOWS.medium,
    height: "100%"
  },
  logoContainer: {
    width: '100%',
    // height: '100%',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: SIZES.large
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.medium,
    borderBottomColor: COLORS.head1,
    borderBottomWidth: 1,
  },
  headerContainerChild1: {
    fontSize: SIZES.xLarge,
    fontFamily: "DMBold",
    color: COLORS.head1,
  },
  headerContainerChild2: {
    fontSize: SIZES.xLarge,
    fontFamily: "DMRegular",
    color: COLORS.head2,
  },

  backgroundImage: {
    width: '100%',
    height: "100%",
    borderRadius: SIZES.small,
    overflow: 'auto',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'start',
    alignItems: 'start',
  },
  instructionsContainer: {
    maxHeight: '100%',
    marginBottom:4
  },
  heading2: {
    color: COLORS.head2,
    fontFamily: "DMMedium",
    textDecorationLine: "underline"
   
  },
  
  instructions: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
    textAlign: 'right',
    alignItems: "center",
    gap:14,
    overflow: 'hidden'
    

  },
  insNumbers: {
    fontSize: SIZES.large,
    fontFamily: "DMMedium",
    color: COLORS.head1,
    borderColor: COLORS.head2,
    borderWidth: 1,
    borderRadius: 90, // Use a specific number for borderRadius, not '100%'
    width: 36,
    height: 36,
    lineHeight: 36,
    textAlign: 'center',
  },
  steps: {
    paddingVertical: 10,
    fontFamily: "DMRegular",
    fontSize: SIZES.medium,
    color: COLORS.white,
    textAlign: 'justify'
    
  }

});

export default styles;
