import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colour, fontSize, spacing, borders} from '../styles/tokens';

export const PrimaryButton = ({ children, onPress, title, ...props }) => {  
  return (
    <Pressable style={PrimaryButtonStyles.button} onPress={onPress}>
      <Text style={PrimaryButtonStyles.text}>{title}</Text>
    </Pressable>
  );  
}

export const SecondaryButton = ({ children, onPress, title, ...props }) => {  
  return (
    <Pressable style={SecondaryButtonStyles.button} onPress={onPress}>
      <Text style={SecondaryButtonStyles.text}>{title}</Text>
    </Pressable>
  );  
}

export const ButtonContainer = ({ children, ...props }) => {
  const { direction } = props;
  return (
    <View style={direction == 'row' && ButtonContainerStyles.row || ButtonContainerStyles.column}>
      {children}
    </View>
  );
}


const PrimaryButtonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['m'],
    paddingHorizontal: spacing['xl'],
    borderRadius: borders.radius['l'],
    elevation: 3,
    backgroundColor: colour.primary[500],       
    marginTop: spacing['m'],  
  },
  text: {
    fontSize: fontSize.headline.size,
    lineHeight: fontSize.headline.lineHeight,
    fontWeight: fontSize.headline.weight,
    letterSpacing: 0.25,
    color: colour.text['high'],
  },
});

const SecondaryButtonStyles = StyleSheet.create({
  button: {        
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['m'],
    paddingHorizontal: spacing['xl'],
    borderRadius: borders.radius['l'],
    elevation: 3,
    backgroundColor: colour.grey[700],
    alignSelf: 'stretch',
    marginTop: spacing['m'],
  },
  text: {
    fontSize: fontSize.headline.size,
    lineHeight: fontSize.headline.lineHeight,
    fontWeight: fontSize.headline.weight,
    letterSpacing: 0.25,
    color: colour.text['high'],
  },
});

const ButtonContainerStyles = StyleSheet.create({
  column: {           
    width: '100%',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',    
    paddingVertical: spacing['xxl'],
    paddingHorizontal: spacing['xl'],    
  },
  row: {       
    width: '100%',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',    
    paddingVertical: spacing['xxl'],
    paddingHorizontal: spacing['xl'],    
  },
});

