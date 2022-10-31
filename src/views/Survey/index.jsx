import { View } from 'react-native'

import useModal from 'hooks/useModal'

import StyledText from 'components/Styled/Text'

const Survey = ({ route }) => {
  const { course } = route.params
  const { Modal } = useModal()

  return (
    <View>
      <Modal />

      <StyledText>{course.name}</StyledText>
    </View>
  )
}

export default Survey
