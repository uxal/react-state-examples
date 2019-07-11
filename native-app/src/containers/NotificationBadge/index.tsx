import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RecipesContext } from "../../providers/Recipes-hooks";
import { Wrapper, Badge, Text } from "./styled";

const NotificationBadge: React.FC<INotificationBadgeProps> = props => {
  const { name, size, color } = props;
  const { selectedRecipes } = React.useContext(RecipesContext);
  return (
    <Wrapper>
      <Ionicons name={name} size={size} color={color} />
      {selectedRecipes.length > 0 && (
        <Badge>
          <Text>{selectedRecipes.length}</Text>
        </Badge>
      )}
    </Wrapper>
  );
};

interface INotificationBadgeProps {
  name: string;
  size: number;
  color: string;
}

export default NotificationBadge;
