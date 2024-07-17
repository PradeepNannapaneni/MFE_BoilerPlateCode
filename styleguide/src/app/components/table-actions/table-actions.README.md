# Table Actions Component
## Summary

This Angular component is designed to display a list of actions that can be performed on a table row. It includes functionality for closing the action menu and tracking events for Google Analytics.

## Key Features:

- Dynamic Action Menu: 
    - Displays a list of actions specific to each table row, enhancing user interactivity.

- Close Action Menu: 
    - Emits an event to notify parent components when the action menu should close, enabling better state management.

- Click Outside Detection: 
    - Listens for clicks outside the component to automatically close the action menu, improving user experience.

- Google Analytics Tracking: 
    - Integrates with Google Analytics to track user interactions with the action menu, providing insights into user behavior.

- Input Binding: 
    - Uses @Input properties to accept dynamic data for action items, module names, and menu state, allowing for flexible usage.

- Event Emission: 
    - Utilizes @Output to communicate actions back to the parent component, facilitating a reactive design.

- Modular Design: 
    - Encapsulates functionality in a reusable component, promoting better code organization and maintainability.


## Summary of Functions
- `closeActions()`:	Emits the closeClick event to signal that the action menu should close.
- `clickout(event: any)`:	Listens for clicks outside the component; if a click occurs outside and the menu is open, it emits the closeClick event to close the menu.
- `onTrack(name: string)`:	Sends an event to Google Analytics to track user interactions with the action menu, using a constructed event name that includes the module name.`

## Usage
```html
<styleguide-table-actions 
    [actionItems]="row.actions" 
    [isCardClosed]="false" 
    [moduleName]="moduleName" 
    (closeClick)="onCloseActions()">
</styleguide-table-actions>
```

## Sample Inputs 
```typescript
row = {
    actions: [
        { name: "View Details", url: "/details/123" },
        { name: "Edit", url: "/edit/123" },
        { name: "Delete", url: "/delete/123" },
        { name: "Export", url: "/export/123" }
    ]
}