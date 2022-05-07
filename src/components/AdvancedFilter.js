import TabsContainer from './TabsContainer.js';
import { VStack } from '@chakra-ui/react';
 
const AdvancedFilter = (toggleActiveLink) => {
    return (
        <div className="AdvancedFilter">
            <TabsContainer toggleActiveLink={toggleActiveLink}/>
        </div>
    );
};

export default AdvancedFilter;