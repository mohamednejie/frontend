import React from 'react'

//Forms
const Reunion = React.lazy(() => import('./views/forms/Reunion/Reunion'))
const Ressource = React.lazy(() => import('./views/forms/ressource/Ressource'))
const UpdateEventForm = React.lazy(() => import('./views/forms/event/UpdateEventForm'))
const Ajouterevent = React.lazy(()=> import('./views/forms/event/ajouterevent'))
const Formation = React.lazy(() => import('./views/forms/formation/Formation'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const event = React.lazy(() => import('./views/forms/event/Event'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))
const User = React.lazy(() => import('./views/User/User'))
const Ajouterformation = React.lazy(() =>import('./views/forms/formation/Addformation'))
const Updateformation = React.lazy(()=> import('./views/forms/formation/Updateformation'))
const Updatereunion = React.lazy(()=> import('./views/forms/Reunion/Updatereunion'))
const Ajouterreunion = React.lazy(() =>import('./views/forms/Reunion/Addreunion'))
const Ajouterressource = React.lazy(() =>import('./views/forms/ressource/Ajouterressource'))
const Updateressource = React.lazy(()=> import('./views/forms/ressource/Updateressource'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/User', name: 'User', element: User },
  { path: '/forms', name: 'Forms', element: Formation, exact: true },
  { path: '/forms/formation', name: 'Form Control', element: Formation },
  { path: '/forms/event', name: 'event', element: event },
  { path: '/forms/Reunion', name: 'Checks & Radios', element: Reunion },
  { path: '/forms/Updatereunion/:id', name: 'Updatereunion', element: Updatereunion },
  {path: '/forms/Addreunion', name: 'Addreunion', element: Ajouterreunion},
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/ressource', name: 'ressource', element: Ressource },
  { path: '/forms/UpdateEventForm/:id', name: 'UpdateEventForm', element: UpdateEventForm },
  { path: '/forms/Ajouterevent', name: 'Ajouterevent', element: Ajouterevent },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  {path: '/forms/Addformation', name: 'Ajouterformation', element: Ajouterformation},
  {path: '/forms/Updateformation/:id', name: 'Updateformation', element: Updateformation},
  {path: '/forms/Ajouterressource', name: 'Ajouterressource', element: Ajouterressource},
  {path: '/forms/Updateressource/:id', name: 'Updateressource', element: Updateressource},

]

export default routes
