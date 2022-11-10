// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import skills from './skills'
import experience from './experience'
import project from './project'
import socials from './socials'
import pageInfo from './pageInfo'



export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([skills,pageInfo,experience,socials,project]),
    
})
