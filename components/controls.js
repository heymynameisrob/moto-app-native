import { Text, Pressable, StyleSheet } from 'react-native';
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

const PrimaryButtonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['m'],
    paddingHorizontal: spacing['xl'],
    borderRadius: borders.radius['l'],
    elevation: 3,
    backgroundColor: colour.primary[500],
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
  },
  text: {
    fontSize: fontSize.headline.size,
    lineHeight: fontSize.headline.lineHeight,
    fontWeight: fontSize.headline.weight,
    letterSpacing: 0.25,
    color: colour.text['high'],
  },
});
