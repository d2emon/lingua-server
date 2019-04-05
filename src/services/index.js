import families from './families';

export const fetchFamilies = () => families.byParent()
  .then(logResponse('fetchFamilies'));

export const fetchFamily = familyId => families.withChildren(familyId)
  .then(logResponse('fetchFamily'));

export const fetchSubgroups = item => families.byParent()
  .then(logResponse('fetchSubgroups'))
  .then(data => item && families.withChildren(item.slug))
  .then(logResponse('fetchSubgroups.Family'))
  .then(family => family && family.children);
