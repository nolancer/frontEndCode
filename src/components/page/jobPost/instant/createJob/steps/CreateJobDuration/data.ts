import { ControlledRadioButtonsGroupOptionsType } from "@/components/base/ControlledRadioButtonsGroup/types";

export const projectScopeOptions: ControlledRadioButtonsGroupOptionsType[] =
    [
        {
            label: "Large",
            description: "Longer term or complex initiatives (ex. develop and execute a brand strategy (i.e., graphics, positioning))"
        },
        {
            label: "Medium",
            description: "Well-defined projects (ex. design business rebrand package (i.e., logos, icons))"
        },
        {
            label: "Small",
            description: "Quick and straightforward tasks (ex. create logo for a new product)"
        }
    ];

export const projectDurationOptions: ControlledRadioButtonsGroupOptionsType[] =
    [
        {
            label: "More than 6 months"
        },
        {
            label: "3 to 6 months"
        },
        {
            label: "1 to 3 months"
        }
    ]

export const projectExperienceOptions: ControlledRadioButtonsGroupOptionsType[] =
    [
        {
            label: "Entry level",
            description: "Looking for someone relatively new to this field"
        },
        {
            label: "Intermediate",
            description: "Looking for substantial experience in this field"
        },
        {
            label: "Expert",
            description: "Looking for comprehensive and deep expertise in this field"
        }
    ]

export const projectJobTypeOptions: ControlledRadioButtonsGroupOptionsType[] =
    [
        {
            label: "Yes, this could become full time",
            description: "After a trial period, you can pay a one-time fee to convert the contract."
        },
        {
            label: "No, not at this time",
        }
    ]