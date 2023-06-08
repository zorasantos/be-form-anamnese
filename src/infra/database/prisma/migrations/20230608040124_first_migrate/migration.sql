-- CreateTable
CREATE TABLE "personalData" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "addressDetails" TEXT,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "personalData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "difficultiesAndObjectives" (
    "id" TEXT NOT NULL,
    "difficultFirst" TEXT NOT NULL,
    "difficultSecond" TEXT,
    "difficultThird" TEXT,
    "objective" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "personalDataId" TEXT NOT NULL,

    CONSTRAINT "difficultiesAndObjectives_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "childrenList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "occupation" TEXT,
    "age" INTEGER,
    "gender" TEXT,
    "comments" TEXT,
    "familyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "childrenList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membersWithOfMentalIllness" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "problems" TEXT NOT NULL,
    "familyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "membersWithOfMentalIllness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "familyAndYou" (
    "id" TEXT NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "fatherAge" INTEGER,
    "fatherDeathAge" INTEGER,
    "ageWhenFatherDied" INTEGER,
    "fatherOccupation" TEXT,
    "fatherDescription" TEXT,
    "motherAge" INTEGER,
    "motherDeathAge" INTEGER,
    "ageWhenMotherDied" INTEGER,
    "motherOccupation" TEXT,
    "motherDescription" TEXT,
    "problemsWithParents" TEXT,
    "relationshipBrothers" TEXT,
    "atmosphereHome" TEXT,
    "importantChanges" TEXT,
    "anyoneImportantForMe" TEXT,
    "psychiatricTreatment" INTEGER,
    "historyOfMentalIllness" INTEGER,
    "anyMemberFamilySuicideAttempt" INTEGER,
    "anyMemberFamilyDiedBySuicide" INTEGER,
    "manyChildrenThereInFamily" INTEGER,
    "botherYou" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "personalDataId" TEXT NOT NULL,

    CONSTRAINT "familyAndYou_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "difficultiesAndObjectives" ADD CONSTRAINT "difficultiesAndObjectives_personalDataId_fkey" FOREIGN KEY ("personalDataId") REFERENCES "personalData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "childrenList" ADD CONSTRAINT "childrenList_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "familyAndYou"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membersWithOfMentalIllness" ADD CONSTRAINT "membersWithOfMentalIllness_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "familyAndYou"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "familyAndYou" ADD CONSTRAINT "familyAndYou_personalDataId_fkey" FOREIGN KEY ("personalDataId") REFERENCES "personalData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
