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

    CONSTRAINT "difficultiesAndObjectives_pkey" PRIMARY KEY ("id")
);
