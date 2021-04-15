export enum FeatureType {
    family_members = 'family_members',
    phone_verification = 'phone_verification',
    development = 'development',
}
export const DefaultFeaturesConfig = {
    [FeatureType.development]: true,
    [FeatureType.family_members]: true,
    [FeatureType.phone_verification]: true,
};

export const Features = [FeatureType.development, FeatureType.family_members, FeatureType.phone_verification]