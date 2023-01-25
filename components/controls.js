import { Text, Pressable, StyleSheet } from 'react-native';
import { colour, fontSize, spacing, borders} from '../styles/tokens';

export const PrimaryButton = ({ children, onPress, title, ...props }) => {  
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );  
}

const styles = StyleSheet.create({
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
