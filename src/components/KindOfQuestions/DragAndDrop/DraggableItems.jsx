import { View } from 'react-native'

import Draggable from './Draggable'

import emocionado from 'assets/smiles/emocionado.png'
import bien from 'assets/smiles/bien.png'
import feliz from 'assets/smiles/feliz.png'
import sincomentarios from 'assets/smiles/sincomentarios.png'

const DraggableItems = ({ pan, styles, keyPress, handlePress }) => {
  return (
    <View style={styles.row}>
      <Draggable
        styles={styles}
        keyPress={keyPress}
        handlePress={handlePress}
        contentPan={pan}
        image={bien}
        value={2}
        text='Algunas Veces'
      />
      <View style={styles.colRow}>
        <Draggable
          contentPan={pan}
          styles={styles}
          keyPress={keyPress}
          handlePress={handlePress}
          image={feliz}
          value={3}
          text='Muchas Veces'
        />
        <Draggable
          contentPan={pan}
          keyPress={keyPress}
          handlePress={handlePress}
          styles={styles}
          image={emocionado}
          value={4}
          text='Siempre'
        />
      </View>
      <Draggable
        contentPan={pan}
        styles={styles}
        keyPress={keyPress}
        handlePress={handlePress}
        image={sincomentarios}
        value={1}
        text='Nunca'
      />
    </View>
  )
}

export default DraggableItems
